const a=[.75,.2,.44,.53,.57,0,.01,0,.71,.88,.04,.9,.93,.12,0,.77,.53,.93,.54,.9,.43,0,.07,0,.15,.33,0,0,0,0,0,0,.3,.1,.38,.31,.04,0,.09,.58,.11,.54,0,.76,.28,0,.01,.89,0,0,.24,.62,.03,.87,0,0,.53,0,.76,.47,0,.16,.01,.91,.08,0,.11,0,.06,.39,.94,.01,0,.11,.73,.65,.01,0,.19,.01,.33,.24,.55,.2,.76,0,.43,.91,.35,.14,0,.44,0,.5,.3,0,.07,.01,.2,0,.78,.04,0,.95,0,.56,.01,0,.25,0,.81,0,.04,.43,.94,.23,.79,0,.65,.78,.74,.01,.6,.17,.06,0,1,.01,0,.06,0,.06,.82,0,.04,.51,0,0,0,.91,0,.36,0,.56,.2,.63,.79,0,0,.97,.02,.03,.92,.49,0,0,.05,.5,.08,0,0,0,.93,0,0,0,.18,0,0,.19,.17,0,0,0,0,0,.4,0,0,.81,.47,.38,.12,.06,0,0,.37,.87,0,.82,.67,0,.97,0,0,.83,0,.06,.41,0,0,0,.15,.43,.53,0,.34,0,0,.28,0,0,.24,0,0,0,.35,0,0,0,0,0,0,.69,0,.14,0,0,0,0,.66,.11,0,.42,.21,.19,0,0,.02,.51,0,0,0,0,0,.24,.8,.34,.65,.68,0,.36,0,0,.01,.47,.27,.08,.06,.18,.08,0,0,.01,0,0,.02,.08,.13,.5,.01,.29,.22,.53,.94,.45,0,0,.09,0,0,0,0,.71,0,.02,0,.01,0,0,0,0,.06,.58,0,0,0,.13,.31,0,.71,.85,0,.18,.31,.94,.33,0,0,0,.35,.7,.91,.3,0,0,0,0,.22,.03,.05,.92,0,.05,0,0,.05,.66,.1,0,.14,.01,.03,.81,0,.14,0,0,.17,.05,0,0,.55,.07,.01,.16,.61,0,.01,0,0,0,.31,0,0,0,0,.09,0,.37,.06,.53,0,0,.34,.87,.04,.17,0,.81,0,.99,.87,0,0,0,.14,.02,.09,0,.28,.21,.59,.68,.44,0,.07,.81,.06,.14,.03,.91,.63,.42,.76,.96,0,.44,.25,.15,.46,0,.05,.15,0,.94,0,0,0,0,.36,.03,0,.03,0,.73,.01,.58,0,.54,.13,.23,0,.79,.98,.23,.77,.93,0,0,0,0,.7,.27,0,.14,.05,.02,.64,0,0,.3,.03,.01,.09,0,.66,.02,.29,0,.17,0,.24,0,.52,0,0,.22,0,.39,.31,0,.54,0,.58,.02,.67,.62,.03,.65,0,.08,.55,.03,0,.09,.16,.49,.92,0,0,0,.05,0,.1,0,0,0,.51,.23,.88,.84,.75,.01,.06,.53,0,.01,.25,0,0,.1,.01,.24,.38,.01,0,.01,.77,0,0,0,.19,0,.17,0,0,0,0,.07,.1,.25,0,.4,0,.4,.97,.86,.51,0,0,0,.59,0,.14,0,0,.05,0,.99,.2,0,.47,0,.09,.34,0,0,.25,.06,0,.14,.54,.76,.17,.71,.03,0,.01,.83,.75,0,.02,0,.2,.63,.16,.09,0,.16,.03,.47,.04,.99,.15,.76,.53,.13,0,.38,.02,.7,0,0,0,0,.84,0,0,.02,.33,.83,.83,0,0,.98,.02,.93,0,.06,.48,.68,.28,0,.91,0,0,.81,.33,.09,.45,.01,0,0,.27,.44,.86,.18,0,.83,0,.11,0,.76,0,.34,.82,0,0,.37,.58,0,.08,0,.01,0,.1,0,0,0,0,.08,0,0,.62,.01,0,.06,.68,0,.47,.07,0,.65,.09,.29,0,.06,.87,.4,.95,0,.52,0,.64,.7,.2,0,.1,.81,.19,.96,.48,0,0,0,0,.78,.72,.2,.87,0,.3,.05,0,.05,.27,.35,.04,0,.99,.71,0,.71,.06,.72,.67,.07,.07,.29,.1,0,0,.87,.1,.12,.77,.03,.53,0,.08,0,.02,0,.14,.56,.71,.07,.01,.59,0,0,.04,.56,.8,.62,.48,0,.29,.04,.03,0,.13,.14,0,0,.01,.41,0,.3,.04,.02,.01,0,.2,.69,.34,.01,.01,0,.52,.3,.47,0,.29,.24,.72,0,.01,.34,.04,0,.19,.03,0,.02,.04,.34,0,.02,0,0,.52,.3,0,.2,0,.01,.8,0,.37,.26,.29,.09,.29,0,0,0,0,0,0,0,0,0,.17,0,.76,.03,.44,0,.69,.48,0,0,.09,.01,.17,.59,0,.42,.41,.17,.12,.19,0,0,.09,0,.21,.79,.05,.78,0,.67,.48,.23,.09,0,.35,1,0,.14,0,.18,.13,.01,.02,0,.27,0,0,.63,.82,0,0,.06,0,0,0,.11,.79,0,.02,.61,.39,0,0,0,0,.84,0,.67,.65,.41,0,0,.02,.04,0,0,.02,.87,.77,0,0,0,.1,0,.05,.06,0,.56,.8,.15,0,.21,0,.34,0,.25,.15,.19,.18,0,.13,.8,.08,.58,.09,.57,0,.01,.28,.18,.6,.47,.14,0,.46,0,.2,0,0,.05,0,0,.06,0,0,.24,0,.12,.84,.14,0,.39,.12,.61,.14,0,0,1,.29,.3,.23,.37,0,.82,.01,.27,.01,.01,0,.34,.02,0,.01,.92,.38,.01,0,.19,0,.39,0,.01,.1,0,.22,0,.28,.54,.6,.1,0,.55,.15,0,.11,.71,0,0,0,.05,.01,.02,.01,0,0,0,.41,0,0,0,0,0,0,.95,.92,0,0,0,0,.09,.14,0,.17,.93,.26,.31,.26,.39,.69,.35,.97,0,.14,.58,.53,.92,0,0,0,0,0,.42,.08,.01,0,.74,.11,0,.86,0,.19,0,.01,.71,.74,.2,0,.34,.09,0,.05,0,.03,0,.21,.68,0,.69,0,.95,.69,0,.89,.63,.06,.1,0,.11,.13,0,.93,.2,.41,.05,0,.31,0,.73,.82,.03,0,0,0,.95,.79,.92,0,0,0,.45,.33,.03,.05,0,0,.78,.41,.03,.44,.41,0,0,.66,.57,0,.1,.63,0,.05,.03,.72,0,0,0,.03,.03,0,.01,0,.17,.31,.29,.56,.25,0,.28,.21,0,0,.8,0,0,.63,.02,0,.66,.99,0,.02,.63,.24,.59,.81,0,0,.33,0,.01,.82,.11,.24,.52,.02,0,.08,0,.72,.22,.41,.08,0,.13,.4,.01,.02,0,.89,.09,0,0,.52,0,.3,0,.05,.64,.76,.16,.7,0,.11,.07,.35,.28,0,.01,0,.65,.15,0,0,.38,0,.62,.36,.07,0,.84,.58,0,.26,.74,.45,0,.01,.97,.09,0,.01,.42,.09,.72,.98,0,0,.57,.04,0,.74,.09,0,0,0,.54,.54,0,.15,.22,.1,.06,.61,0,.02,.07,.79,0,0,.38,.03,.16,.1,0,.75,0,0,0,0,.01,0,.52,.69,.19,.5,.73,.59,.17,.01,.48,.37,.66,.17,.9,.12,.72,.01,.14,0,.35,.07,0,.63,.18,0,0,0,0,.13,.39,.41,0,0,0,0,0,0,.76,.68,.62,0,0,0,.02,.02,.75,.01,.33,0,0,.73,0,.37,.87,.76,.09,.23,.95,.29,.44,.05,0,0,0,.29,0,.55,0,.33,0,.06,.24,.46,0,0,0,.2,0,0,.92,.66,0,0,0,0,.05,.06,.36,0,0,.4,.8,0,0,.36,.13,0,0,.01,.07,0,.2,.1,1,0,.18,.9,0,.12,.9,.05,0,.02,.09,.01,0,.13,.88,0,0,0,0,.01,0,0,0,0,0,0,0,.53,0,.01,0,0,0,.04,.84,.98,0,0,.2,0,.35,.06,.01,.02,.15,.01,.01,0,.97,0,.52,.16,.19,0,0,0,0,0,0,.04,.29,0,.12,.98,.2,0,.59,0,.52,0,0,.06,0,0,.09,0,.28,.04,0,.03,0,0,.03,0,.79,.58,.31,.81,0,0,.23,.76,.04,0,.08,.35,0,.02,0,.65,.41,.44,.93,0,.22,0,0,0,.25,.49,0,.38,.31,.96,0,.45,.66,.44,.71,.85,.13,0,0,.16,.99,.9,0,.52,0,0,0,.01,.73,.95,0,0,.16,.12,0,0,.8,0,0,0,.61,0,.01,.56,0,0,.02,0,.27,.73,0,0,.01,0,.02,0,.01,.26,.46,.37,.17,.76,0,.99,0,.78,0,.44,0,0,.37,.5,.07,0,0,.25,.76,.38,.1,0,.09,0,0,0,.03,.01,.18,.08,.86,.89,0,0,0,0,.1,0,.09,0,.01,0,.57,.04,0,.11,0,0,.37,0,0,.16,.07,.06,.7,0,.02,.51,0,0,.06,0,.34,.95,.09,.06,.58,0,0,.74,.13,0,.95,.07,.27,.44,0,.13,.15,0,0,0,0,0,.31,0,0,0,0,0,0,.16,.33,.16,.43,0,0,.08,0,.51,0,.75,.08,.02,.03,0,0,.75,.62,.25,.83,.36,0,0,.34,.37,.01,.07,0,0,0,0,0,.89,.01,.16,0,0,0,.82,.39,.5,.06,.81,.08,0,.71,0,.84,0,0,0,0,0,.13,0,.07,.04,0,.03,.45,1,0,0,.06,0,.55,0,.09,0,0,0,0,.88,.65,.83,0,.1,.17,.46,0,0,0,.07,0,.01,.02,0,.08,0,.19,.44,0,.89,.1,.2,0,.37,0,.33,0,0,0,.16,0,0,.15,.53,.1,.66,0,0,0,0,0,.57,.02,.93,.15,.1,0,.02,.96,.02,.85,.01,.07,0,.98,.45,.03,.23,.05,0,0,.02,0,.01,.38,.17,.83,.19,.05,.18,0,0,.58,.01,0,0,0,0,.01,.22,.01,1,.84,.02,.26,.97,.71,.36,.31,.74,0,.34,.01,0,.39,.22,.68,.9,.96,0,.02,.08,0,.92,.2,.83,.57,0,0,.35,.2,.65,.95,.66,.05,0,0,.03,.05,.99,.54,.36,0,0,0,0,0,.03,0,.07,.69,.02,0,0,0,.25,0,.34,.02,0,0,0,0,.99,0,0,.09,0,.26,.01,.34,.32,.09,0,.21,0,.75,.13,.05,0,.94,0,0,.16,0,0,0,0,0,.35,.8,.33,.92,.19,.22,.14,.05,0,.01,0,.02,.86,.16,.36,0,.01,.55,.18,.64,.13,.72,0,.06,0,.13,.16,.02,0,.18,.25,.04,.25,0,0,0,.13,.02,.48,0,.04,.19,.15,0,0,0,.42,.32,.03,.03,.93,.01,.47,.6,0,0,.01,0,.77,0,.01,0,.02,.25,.07,.18,.06,.87,.71,.16,.28,.32,0,.01,.05,.86,0,0,0,0,0,.57,.02,.49,.02,.96,.61,.79,.91,.35,.3,0,.69,0,0,.35,.6,.04,0,0,0,.36,.36,.79,.58,0,.49,.95,0,0,.06,.56,.31,0,.76,.1,.7,.07,.06,.09,.02,0,.72,0,.06,.52,.48,.81,.71,.05,.01,.13,.55,.08,.45,.01,0,.19,.01,0,.77,0,.59,0,.72,.42,.57,0,.11,0,.57,0,.06,.53,.44,.07,.04,0,.01,.13,0,.26,.98,.04,0,.77,0,.08,0,.14,.62,0,.94,.41,0,0,0,.49,0,.45,.62,.43,.07,.15,.74,0,.01,.16,0,0,.02,.19,.92,.94,.57,.86,0,0,.03,0,.29,.25,.06,.76,.09,.9,0,.02,.8,.05,0,.45,0,0,.24,0,0,.22,0,0,0,.13,.02,.16,.4,.07,.16,0,.56,.05,.5,0];export{a as pvalData};
