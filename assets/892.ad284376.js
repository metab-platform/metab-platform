const a=[.23,0,0,.66,0,.01,.53,.66,.2,.1,0,.05,.01,0,0,.33,0,.52,0,.42,.55,.49,1,0,0,0,.75,.72,.55,.63,0,.36,0,0,.01,.24,0,0,.51,0,.68,0,0,.17,.12,0,.92,.05,.15,.51,.12,0,0,0,.01,0,0,0,.38,0,.02,0,0,.71,.04,.42,0,0,.41,.73,.71,0,.19,.12,0,.15,.37,.05,0,.07,.01,0,.79,0,.91,.04,0,.19,0,0,.69,.18,.56,0,.01,0,0,0,.08,.05,.92,0,0,.74,.02,.15,.4,.17,0,.01,.19,.45,.19,0,.81,0,.53,.7,.11,0,0,.05,0,.01,.65,.1,0,.16,.36,0,.02,0,.54,.61,0,.83,.5,.23,.38,.01,0,0,0,0,0,.87,.59,.5,0,.13,0,.89,.78,.01,.11,.75,.69,0,.85,0,.16,0,.03,.88,.96,.39,0,.52,.07,0,0,.35,.14,.03,.01,.56,.8,.68,.62,0,.92,.23,.78,0,.02,0,0,0,.99,.87,.27,.97,.09,0,0,0,0,.01,0,.31,0,0,0,0,.03,0,.4,.78,.5,0,.07,0,.04,0,0,.24,.21,.26,.48,.19,.03,.23,.12,0,.11,0,.15,.43,0,.88,.56,.38,0,0,.01,0,0,.01,.26,.48,.08,0,.01,.09,.85,.15,.38,.09,.01,.97,.36,.01,.06,.3,0,.01,.77,0,.66,0,.05,.21,.04,0,.46,.06,.7,0,.02,0,.05,.53,0,0,0,.01,.06,.04,0,.24,.79,.72,0,0,.68,0,.89,0,.76,.61,.14,.26,0,.21,.12,0,0,.56,.18,.77,.19,0,.65,.03,.12,.14,.13,0,.16,0,0,.17,0,0,.07,.84,.29,.34,0,.62,0,.7,0,0,.07,.41,0,.09,.94,.45,0,.02,.22,.02,.38,.59,.27,.03,.54,.1,.01,0,.07,.65,0,0,.67,.72,0,.86,0,.11,0,.44,.05,0,.15,.99,0,0,0,.68,.19,.01,.9,0,0,0,.03,.94,.05,.02,.32,.08,.02,.46,.37,0,.94,.52,.04,.42,.32,.12,.95,.11,.84,.62,0,0,0,0,.1,.36,.32,0,.12,.04,.18,.55,.58,.58,0,.02,.41,.71,0,0,0,0,0,0,0,0,.08,0,0,0,.94,0,0,0,.06,0,.7,0,0,.04,.36,0,0,.03,0,.01,.27,0,.11,0,0,0,0,0,0,0,.58,.05,0,0,.47,.98,.08,.17,0,.16,.2,.15,.32,0,.46,.02,0,0,0,.12,.65,.58,0,.19,.38,0,.49,0,0,0,.59,0,0,.66,0,.83,0,0,0,.52,.25,.21,.26,0,0,0,.58,.12,0,.02,0,0,.02,.18,0,.03,.9,.19,0,0,0,.11,.87,0,0,.03,0,.25,0,.26,.14,.65,0,.36,.3,0,.94,0,.36,.11,.03,0,0,0,.51,0,.37,.03,.24,.21,0,0,.89,.05,0,.05,.3,.5,0,.25,.44,.24,.04,.16,0,.11,.93,0,0,0,0,0,0,.03,.12,.89,0,.75,.91,.04,.93,0,.04,.5,.02,.02,0,0,.15,.06,0,0,.04,0,.98,.73,.15,0,0,.47,.09,0,0,0,.29,0,.01,.95,.32,0,.01,0,0,0,0,.24,0,0,0,.01,0,.37,.61,.41,0,.06,.86,0,0,.56,0,.57,0,.26,.47,0,.01,.86,.78,.78,.01,0,.11,.96,0,.01,.03,.07,.03,.84,.12,.06,0,.28,.32,.07,.11,0,.15,.22,.08,0,0,0,.01,.14,0,0,.24,0,0,.16,0,.21,0,.38,0,0,0,.22,.07,0,.95,.18,0,0,.15,0,.28,.95,0,0,0,0,.06,.34,.45,0,0,0,.56,0,.07,0,0,.05,.5,.06,.01,0,.01,0,0,0,0,.02,0,.25,.08,0,.28,.59,.78,0,0,.57,0,.12,0,.82,.05,.39,.21,.43,.13,.29,.52,0,0,0,0,.02,.05,.05,0,0,.22,.12,0,.83,.14,.12,0,.02,.53,0,0,0,.05,.4,.65,.28,.06,0,.13,.01,0,.61,.59,.01,0,.81,.04,0,0,.69,.21,.62,0,.34,.01,0,0,0,.68,0,0,.35,0,0,.72,.77,.29,.7,0,.73,0,.77,.04,0,0,0,.26,.11,.46,.32,.07,.09,0,0,0,.98,0,0,0,.34,.02,.02,0,0,0,.08,.03,.24,.13,.16,.71,.41,0,.31,.01,.07,0,.86,.5,0,0,0,.01,.03,.02,0,.3,0,.78,.8,.04,0,.36,.25,0,.79,.42,.1,0,.3,0,0,0,.01,.75,0,.78,.49,.09,.19,.64,.43,0,.27,.24,.53,.09,.45,.99,.34,0,0,.01,.01,0,.1,.01,0,.37,.02,.01,.01,.09,.88,.01,.62,.54,.73,.55,0,1,0,.27,0,0,.87,.58,.55,0,.1,0,0,0,.13,0,.01,.12,0,0,0,.11,.82,.5,.55,0,0,0,.24,0,.09,.01,.54,.56,0,0,.44,0,.27,0,.36,.03,.04,0,0,0,0,0,0,0,.85,.87,0,0,0,0,0,.46,.1,0,0,0,.86,.34,0,.82,.69,.3,0,.56,.12,.05,.54,.06,.05,.36,.03,0,.1,0,.85,0,.94,.37,.48,0,.31,.74,.57,0,.08,.01,.39,0,0,0,.23,.02,.18,.76,0,0,.06,.1,.27,1,0,0,0,0,.1,.29,.02,.47,.05,.03,.18,.5,.33,.72,.67,.51,.11,.31,.2,0,0,0,.01,.01,0,.26,0,.17,.76,.14,.03,0,.1,0,.02,0,.04,0,.08,.05,.02,0,.27,0,.05,0,.08,.03,.81,.03,0,0,.03,0,.15,.41,0,.01,.02,.21,.59,0,.04,.32,0,.48,0,.11,.37,.66,.79,.3,.56,.03,0,.75,0,.34,0,.94,.21,.42,.06,0,.12,.24,.02,0,0,.51,0,0,.21,0,0,0,.14,.25,.14,.03,.3,.26,0,.23,0,.11,0,0,.31,0,0,.01,.07,0,0,.1,0,.05,.02,0,0,0,.24,0,.67,0,.3,.39,.04,.59,.01,.02,0,.36,0,.97,0,0,0,.02,0,.89,0,.53,.97,.01,0,0,0,.1,0,0,0,0,.01,0,0,.09,.04,0,0,0,0,0,.57,.07,.6,0,0,.59,.23,0,.47,0,0,0,.02,.08,.31,0,.06,0,0,0,0,.04,0,0,.35,.03,.17,0,0,.03,.94,.01,.05,.54,.05,.01,0,0,0,.57,0,.12,.11,0,.08,0,0,.98,0,0,0,.29,0,0,0,.64,0,0,0,0,.12,0,0,0,.15,0,.06,.15,0,0,.99,.22,0,0,0,0,.02,.06,.76,.45,.46,.73,0,0,.19,0,0,.07,.02,.01,0,0,0,0,.94,0,.79,0,.18,0,0,0,.63,.34,.07,0,.2,.1,0,.11,0,.03,0,.36,.05,.36,.08,.25,.71,.69,0,0,.95,0,.02,.15,.02,.01,.06,.3,.1,0,.02,0,.15,.23,0,0,.21,.23,0,.02,0,0,0,.12,.11,.05,0,.01,0,0,.01,.09,.01,.22,0,.05,0,0,.37,.67,0,0,.16,0,.57,.11,0,0,0,.73,0,0,.02,.27,0,0,0,0,.51,.64,0,0,0,.04,.04,0,.07,.17,0,.12,0,.14,0,.54,.07,.92,0,.03,.54,.08,.41,0,.03,0,.58,.28,.52,.22,.21,0,0,0,.1,0,.47,0,.84,.72,.04,0,.95,.59,0,.03,.15,.03,0,.01,0,.52,.01,.06,.9,.12,.02,.02,.49,.01,0,.11,.01,.3,.27,0,.01,.07,0,0,.1,.11,.25,.01,0,.04,0,.05,.36,.01,.29,0,0,0,.05,.52,0,.15,.66,.02,.85,0,0,.92,.7,.16,.02,0,.63,.39,0,.9,.39,0,.38,0,0,.09,0,.06,0,.13,0,.02,0,0,.02,.54,.18,.59,.01,.68,.36,.23,0,0,0,0,.45,.52,.19,.56,.13,0,.55,.02,0,0,.53,.03,.01,.9,.54,0,.9,0,.15,0,.01,.04,0,.03,.04,0,.52,.04,.04,.52,.52,.07,.01,0,0,.26,.09,.98,.01,.03,.03,.68,0,.46,.35,0,.87,0,.1,0,.9,.01,0,0,.63,.04,.51,0,.47,0,.06,0,0,.73,.52,.23,0,.17,.27,0,0,.01,.96,.04,0,.23,.34,0,.89,.77,0,.02,0,0,.83,0,0,0,.08,0,.25,0,.74,0,.38,0,0,0,.68,0,0,0,0,.51,.96,0,0,.45,.55,0,.23,0,.97,0,0,.01,0,0,0,.02,.69,.05,0,.07,.89,0,0,0,.6,.3,0,0,0,0,.61,.96,.31,.35,.2,0,.24,.26,0,.87,.01,.02,.79,0,0,.27,.38,0,.68,.26,0,0,.59,0,.03,.16,0,.85,0,0,0,0,0,.95,.06,.47,.02,.46,.14,0,.64,0,0,.61,.25,.14,0,0,0,0,0,.02,0,.41,.3,.04,.53,.07,0,.01,0,.61,0,.04,.24,.27,.86,.01,.02,.31,0,0,0,0,.79,0,.33,.01,.13,0,0,.03,0,0,0,0,0,0,0,.26,0,.13,.55,0,.63,.02,0,.19,.01,.09,.57,.66,.84,.7,0,0,0,.11,0,0,0,0,0,0,.76,.31,.46,0,.7,0,.46,.34,.31,.32,0,0,0,.26,0,.01,.69,.17,.45,0,0,.02,.57,.04,.87,.71,.52,.17,0,0,0,.05,.31,.86,0,0,.25,.07,.01,0,.46,0,0,0,0,.56,.01,0,0,.77,.13,.97,0,0,.06,.35,0,.08,.01,.01,.45,.19,0,0,0,0,0,0,.26,0,.01,.32,.05,.97,0,0,0,0,.01,.01,.1,.06,.06,0,.02,0,0,0,0,.29,.55,.37,.02,0,0,.82,.69,.55,.72,0,.57,.01,.05,0,0,0,0,0,0,0,.45,0,.39,.23,0,.81,.3,.86,0,0,0,.01,.16,0,.13,0,.54,.13,.28,.51,0,0,0,.09,.91,.51,0,0,0,.5,.33,.21,.73,.01,.93,0,.09,.4,.07,.39,.33,0,.11,0,.07,.53,0,0,.26,0,0,.03,.06,0,.06,0,.89,0,.02,.15,.78,.48,.02,.83,0,.01,0,0,.24,0,0,0,0,.01,.83,0,.67,.03,0,.84,.15,0,0,.02,0,0,.47,0,.21,0,0,.21,.09,.7,.01,.01,.03,.02,0,.02,.43,.22,0,0,.54,0,.19,0,0,.79,0,.22,0,.16,0,.96,.93,.92,.18,0,.25,0,.03,.53,.04,0,0,0,.15,0,0,0,0,0,0,.91,.05,0,.02,0,.05,.24,0,0,0,.03,0,.92,0,0,.2,.79,0,.04,.02,.02,.4,.29,0,0,0,0,.07,.02,.76,.18,0,.61,.04,.33,0,0,.06,.82,0,.86,0,0,0,.24,0,.07,.01,0,.03,0,0,0,0,0,.01,0,0,.24,0,0,0,.01,0,0,0,.04,0,0,.29,.45,0,0,0,0,0,.02,0,0,.47,0,0,0,0,0,.74,0,0,0,0,.58,.42,.16,.39,0,.88,0,0,0,0,.81,.21,.21,.01,0,.95,.29,.7,0,0,.48,0];export{a as pvalData};
