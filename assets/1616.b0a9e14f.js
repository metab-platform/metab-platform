const a=[.68,.63,0,.99,.04,0,.59,0,.01,.87,.02,.95,.08,0,.01,.85,.86,.66,0,.78,.55,.03,.04,.3,0,0,.01,.02,.01,0,0,.54,0,.45,.03,0,0,.09,.62,.04,.79,.02,0,.75,1,.18,.18,.08,.67,0,.31,.27,1,0,0,.03,0,.02,.93,0,0,0,0,.69,.76,0,0,.28,.98,.48,.1,.53,0,.01,.1,.27,.9,0,.12,.27,.21,.02,.84,.01,.02,.11,0,.46,.01,.04,.32,.85,0,0,.49,.9,.01,.86,.7,0,0,0,0,.11,0,.45,.96,.52,0,0,.38,0,.52,.02,.58,.02,.27,0,.33,0,.9,.27,.01,.83,0,0,.1,.86,0,0,0,.38,.99,0,.03,.32,0,.24,.01,.96,0,.25,0,0,.02,.11,.3,.89,0,.47,0,.02,.76,.09,0,.12,.07,.45,.28,.02,.01,0,.17,.09,0,.01,.05,0,0,0,.03,.06,0,.5,0,.62,.91,.04,0,0,.84,.62,.42,.51,0,.5,.1,.01,0,.17,.89,0,.34,0,0,0,0,.06,.65,.22,.7,0,0,.38,.45,0,.15,0,0,.08,0,.09,.93,.04,.02,0,.43,0,.26,.14,0,0,.06,0,0,0,0,.1,.01,.25,.91,.35,.8,.02,.33,.04,.56,.98,.43,.26,.01,.25,0,.02,0,.04,.82,.17,.19,.27,.01,.05,0,.25,0,.66,.27,.04,.18,.51,.23,.33,0,0,.11,0,.01,0,.35,.04,.98,.02,0,0,0,.07,.03,0,0,.75,0,.01,.15,.07,0,0,.1,0,.03,.84,.02,.01,0,.06,0,0,.11,.54,.01,0,.09,.02,.02,.69,.59,.03,0,0,.26,.33,.05,.4,.28,.02,.09,0,.01,.98,0,.03,0,.72,.37,0,.06,0,0,0,0,0,.07,0,.01,.57,0,.8,0,0,.05,.11,0,.01,.05,.89,0,0,.54,0,0,.02,0,.09,0,0,0,.05,.03,.87,0,.29,.13,.04,.02,.41,.67,.13,.06,0,.07,.67,.71,.03,.08,0,.01,.01,.06,0,.76,.02,.21,.23,.06,.28,.13,0,.22,.82,0,0,0,.01,.88,0,.03,.01,.01,.89,0,.03,0,.47,0,0,.02,.86,.4,0,0,0,.01,0,.09,0,.24,.21,0,.01,0,.37,.01,0,.34,.81,.61,0,0,.79,0,.93,.02,0,0,.01,0,.15,.42,0,0,0,0,.1,.01,.69,.09,0,0,0,.53,0,0,0,0,.48,.5,.12,.24,0,.01,0,.01,0,.04,0,.01,.06,.04,.55,.01,0,.94,.01,0,.59,.01,0,0,0,0,.01,0,.05,0,0,.27,.04,0,.12,.06,.08,.99,.8,.15,.62,0,0,.09,.19,0,.03,.01,.06,0,0,.02,.91,.63,0,0,0,0,.95,.03,0,.12,.28,.02,0,0,0,.02,0,.17,.42,.05,.16,0,.22,.19,0,0,.08,.22,.01,.1,0,.03,0,.32,.25,.83,.75,.02,.13,.98,.11,0,.21,.05,.89,.01,0,0,.01,0,.03,.14,.34,.02,.83,.01,.24,.22,0,.24,.88,.92,.82,.01,.61,0,.01,.54,.78,.04,.01,.11,.88,.07,.3,.79,.16,0,.01,0,.28,0,.02,.32,.01,.96,.15,.82,.01,0,.01,0,.09,0,0,0,.07,.06,0,.02,0,.04,.58,.06,.38,.25,0,.95,0,.8,.41,.01,.04,.2,.06,.01,.31,0,.75,.03,.43,.87,.86,0,.08,.02,.13,.19,0,0,0,0,.03,0,.02,.01,0,.07,.01,.97,0,.4,0,.28,0,.97,0,0,0,0,.18,.98,.3,.01,.54,.02,0,0,.27,.56,.19,.99,.08,0,.01,0,.18,.62,.01,0,.97,0,.07,.03,0,.5,.64,.05,0,.01,0,.17,0,0,0,.29,.78,.64,.04,.56,.24,0,.19,.04,.4,.01,0,0,.06,.16,.02,.47,0,.05,.01,0,.08,0,0,.21,.07,.17,.3,.04,.4,0,0,0,.2,0,.05,.18,.03,.85,.01,.1,0,0,.89,0,0,.01,.13,.1,.33,0,0,.63,.03,.54,.82,0,0,.66,0,.24,.08,.1,.01,.01,.02,.06,.15,0,.1,.32,0,0,.11,.2,.03,0,.47,.01,0,.25,.01,0,.05,.01,.04,0,0,0,.49,0,.77,.2,0,.01,0,0,0,.2,.21,0,.18,0,.53,0,0,0,.01,.13,0,.34,.11,0,0,0,0,0,.28,.79,.84,.27,.91,0,.06,.01,.04,0,.01,.7,0,.58,.13,0,.04,.49,0,.3,.01,.17,.95,.86,0,.01,.08,.21,.47,.35,0,.01,.17,0,0,.67,.01,.66,0,.97,.39,0,.2,.42,.09,0,.97,.77,.03,.32,.63,0,.1,0,0,.09,.13,.76,.73,.03,0,.16,.02,.99,.08,.06,.02,.08,.9,.18,0,.84,0,.01,0,.25,0,.07,.5,0,.02,0,.06,0,.03,.03,0,0,.74,.08,.06,.05,0,0,.47,.05,.32,.12,0,.43,0,.21,0,.56,.05,.81,.14,.1,0,.03,.03,.01,.74,.04,.48,.38,.52,0,.04,.05,.01,.01,.96,0,.02,.05,.02,.14,0,0,.16,0,.01,.86,0,.01,.09,.15,.03,0,0,.22,.19,0,.73,.35,.01,0,.34,0,.81,.05,0,0,.24,.37,1,0,.57,.51,0,.04,.23,.03,.38,.34,0,0,.58,.01,0,0,0,0,0,0,0,0,0,.7,.02,.03,0,0,.03,0,.06,.74,0,.25,.28,.98,.54,.27,.7,.98,.9,.14,.02,.95,.51,.45,.76,.04,0,0,.02,0,.08,0,.69,.89,.65,.07,.16,.46,0,.04,.19,0,.77,0,.05,.02,.97,.01,0,.74,0,.01,.04,.21,.14,0,0,0,.01,.25,.01,.73,.38,.27,.01,0,0,.83,0,.29,.36,.13,.52,.03,0,.05,.14,.01,.02,.63,0,0,0,.15,.23,0,.01,0,0,.36,0,.01,.01,0,0,.04,.9,.62,.96,0,.45,.95,.09,.04,0,.58,.02,0,.4,.08,0,0,.29,0,0,.03,.19,.21,.17,0,0,.02,.04,0,.02,0,0,0,.46,.27,.06,.06,.01,0,0,.12,.27,.63,.08,.67,.25,.11,.4,1,.16,.21,0,0,.06,.08,.11,0,.1,.01,.79,0,.2,.71,.19,0,.02,0,.62,.01,.48,.14,.57,0,0,.47,.03,.03,0,.01,.15,0,0,.61,.01,0,0,0,0,0,0,.16,.31,0,0,0,.94,.02,.33,.05,.43,.03,.61,.03,.94,.05,.1,0,.01,0,.01,.76,.01,.23,.05,0,.25,.11,0,0,.01,.92,0,.11,0,0,0,.09,.01,.98,0,0,.54,.03,1,.06,.01,.98,0,.93,0,.07,.04,0,.02,.02,.14,.13,0,.15,.75,0,.31,0,.41,.1,0,.03,.91,.51,.05,.02,0,0,.77,.02,.62,.87,.12,0,.03,0,.51,.27,.48,.43,.65,0,.01,0,0,.17,0,.63,.05,.02,0,0,.01,0,.15,0,.25,0,.94,0,.03,0,.86,.11,.75,0,0,0,0,.04,.5,.01,.89,.53,.16,.26,0,0,0,.7,0,.01,0,.01,0,0,0,.98,.03,.63,.37,0,.17,0,.42,0,.01,0,.01,.79,.04,.02,0,.01,.49,0,.19,0,.25,.21,.93,.17,.01,0,.01,.03,0,.32,.03,.32,.45,0,.47,.2,0,0,.05,.07,.09,0,.02,.41,0,.27,.3,0,0,0,0,.92,0,0,0,.01,0,0,0,.13,0,.51,0,0,0,0,.21,.54,0,0,.02,.01,.02,.04,.13,.27,.22,.19,.01,0,.21,0,0,.45,.93,0,0,.01,0,0,0,.01,.01,.01,.26,0,0,0,.08,.37,0,0,.29,.01,0,0,.67,0,0,.03,.03,.8,.03,.08,.02,.01,.51,.01,.64,.1,0,.55,.55,0,.03,.76,0,.43,.07,0,.38,.05,0,.88,.61,0,.98,.19,0,.06,.05,.07,0,.89,0,.8,0,.74,.84,.76,0,.01,0,0,0,.46,.82,.93,.8,.06,.6,0,0,.07,.3,.04,0,0,.22,.34,.14,0,.16,0,0,0,.47,0,0,.79,0,0,0,0,0,.36,0,.03,0,0,.03,.21,.95,.83,.32,.15,0,.07,0,.05,0,.01,0,0,0,.06,0,0,.42,.01,0,.37,.61,.08,.96,0,.01,.53,.28,0,0,.48,.13,0,.21,.11,.01,.63,0,0,0,0,.46,.77,0,0,0,0,.01,0,0,0,0,.45,.02,0,.44,0,.09,0,0,.25,.67,0,.64,0,.09,.59,.56,.01,.19,0,0,.02,.08,.38,.56,0,0,0,0,.01,0,0,0,0,.23,.73,.33,0,.01,0,0,0,.01,0,0,0,.9,.42,0,.88,.01,.01,0,.02,0,.32,.03,.22,0,0,0,.99,.64,0,0,0,.01,.97,.49,0,0,.01,0,0,0,.09,0,.7,0,.38,.04,.67,.43,.24,.09,.04,.01,0,.65,0,.27,.01,0,0,0,0,0,.29,.47,.2,0,0,.19,.13,0,0,0,.73,.02,.49,.64,0,0,0,.11,.34,0,.03,0,0,.75,.06,0,0,0,.1,0,.52,.33,0,.44,0,.61,.01,0,.16,0,.04,0,0,.01,.37,.38,0,0,.13,.01,0,.16,.63,0,0,.17,.02,0,.26,.07,0,0,0,.89,.91,.37,0,.38,0,.18,.07,.12,0,0,.01,.27,.34,.08,.08,.01,0,.66,.01,0,0,.2,.7,.41,.07,0,0,0,.05,0,.11,.01,0,0,.02,.54,.04,.63,0,.57,.01,.06,0,0,.15,0,0,0,0,.5,.35,0,.46,.01,0,0,.1,.61,.88,.93,.33,.94,0,0,.83,.01,.01,.39,.01,.04,0,0,.26,0,0,0,.17,.9,0,.06,0,0,.16,.45,0,0,0,0,0,.17,.41,0,0,0,.9,.16,.88,.83,.01,0,0,.03,0,0,0,.03,.02,0,0,.73,0,.84,.1,0,.03,.02,.01,0,0,0,0,.97,.01,0,.03,.46,.82,.52,.25,.04,.02,0,.28,0,0,0,.22,.11,0,.67,.88,.43,.54,.29,0,.38,.03,0,.91,.02,.02,0,.38,.48,.43,0,.45,.15,0,0,0,0,.07,.42,0,.6,0,0,0,0,.13,0,.02,.14,.54,.02,0,.66,0,0,0,0,.68,.03,.02,0,.51,.06,.38,.02,0,.01,.92,0,0,.46,.4,0,0,.01,0,.08,0,0,0,.08,.32,.2,.81,.15,.32,.01,.86,.08,.06,0,.89,0,.56,.32,.1,0,.09,.06,.5,.58,.14,.67,0,0,.72,.04,.41,.05,0,0,.04,.85,.01,.05,0,0,0,.35,.69,0,.04,.05,.09,.55,.14,.11,.01,0,.17,.2,.18,0,0,.42,0,.47,.61,0,.28,.92,.85,0,.01,.79,0,0,.64,0,.05,.76,0,.36,.44,0,0,.07,.4,.04,0,0,.01,0,.35,0,0,.38,0,.02,0,0,0,.02,0,.01,0,.81,0,.32,.01,0,0,0,.01,.03,1,0,.24,.1,.3,.01,.02,.02,.01,.05,.09,0,0,0,0,.01,.02,0,.14,.15,0,0,.03,0,.14,.01,.44,.03,.01,.11,0,0,0,.94,0,.01,.66,.33,.39,0,.63,.1,0,.02,.59,0];export{a as pvalData};
