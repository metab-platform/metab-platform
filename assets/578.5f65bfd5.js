const a=[.48,.04,0,.83,0,.72,.02,.7,.23,.11,.64,.02,.71,0,.13,.06,0,.1,.04,.86,.22,0,.37,.07,.02,0,0,.98,.36,0,0,0,.01,0,.05,.5,0,.05,0,.01,.86,0,.03,.88,.62,.8,.59,0,0,.01,.02,.66,.49,0,.04,.01,.59,0,.12,0,0,0,0,.97,.09,0,0,.22,.35,.78,.71,.02,0,.08,0,.76,.53,0,0,0,.09,0,.81,0,.01,0,0,.18,0,0,.02,.77,.14,0,.04,.13,0,.58,0,0,.41,0,0,.26,0,.27,.24,.28,.02,0,.05,.02,.54,.09,0,0,.16,0,0,0,.6,.01,.24,.24,.03,0,0,.01,0,0,.25,0,.61,.02,.27,.86,.26,0,0,.13,0,0,0,0,.15,.16,.36,.29,0,.05,0,.07,.89,.26,.77,.7,.12,.79,.73,.13,.19,0,.89,.05,.07,0,0,0,.31,0,.43,0,.9,.13,.11,0,.76,0,0,0,.86,.8,.54,0,0,.44,.68,.3,.17,.13,.59,.08,.07,0,0,.02,0,.08,.77,0,0,0,0,.94,0,.02,.07,.01,0,.31,.98,.04,.01,0,.01,0,.56,.58,0,0,.04,0,0,0,.12,0,.89,0,.78,.82,.41,.87,.01,0,.4,.18,.07,.82,.52,.67,0,.01,.52,.61,.31,.5,.97,.02,.81,.88,.54,0,.04,.02,0,.01,.66,0,.2,0,.3,.37,0,0,.97,0,.22,0,.76,0,0,.92,0,0,0,.2,0,0,0,0,.07,0,0,.01,.87,.12,0,0,.09,0,.01,.01,0,.35,.78,.02,.6,.03,.01,.03,.48,0,0,.98,.74,.68,0,0,.22,.66,0,.65,.27,.13,.03,.03,.01,.09,0,.01,0,0,.16,0,.63,.41,.02,.22,0,.36,0,.01,.06,.5,0,.13,0,.18,0,0,0,.03,.34,.62,0,0,.68,.01,.15,.41,0,.45,.51,.79,.27,0,.19,.74,0,0,0,.04,.98,.82,.17,.03,.4,0,0,.11,0,.7,.03,.75,0,.57,.76,0,.5,.01,.76,.16,.62,.07,.28,.4,.46,.14,.1,.03,0,.65,.22,.13,.07,0,0,.76,.52,.01,0,.95,0,0,.17,.58,.03,0,0,0,0,0,.02,0,.28,.39,0,.37,.05,0,.13,.02,0,.73,.01,0,.01,.46,.1,.01,.26,.25,0,.93,.03,0,.06,.01,0,0,0,0,0,.39,0,.03,0,.02,.08,0,.14,0,0,.12,.91,.45,0,0,.39,.01,0,.01,.02,0,.13,0,.31,.01,0,0,.21,0,0,.27,.02,.08,0,.02,.02,0,0,0,.01,.05,0,.5,.59,.02,.71,0,.57,.02,.06,.05,0,0,.52,.88,.07,.39,.6,.98,0,0,0,.23,.98,.2,.14,0,0,.62,0,.45,0,0,.36,.61,0,0,.32,0,.01,.36,0,.54,.31,.13,.12,.02,.27,.44,.12,.74,.47,.03,.25,.07,.05,.01,.59,.1,.05,0,0,.09,.89,0,0,.65,.04,0,0,0,0,.08,0,.2,.51,.24,0,0,.8,.45,.53,.83,.78,.45,.4,.09,0,0,.03,.01,0,0,.88,0,0,.09,0,.43,0,.68,0,0,0,0,0,0,.74,.98,.25,0,.48,.02,.03,0,0,.45,.13,0,0,.02,.18,0,.95,0,.19,.71,.43,0,.88,.1,.6,.73,0,.44,.52,.54,.6,.11,.71,.62,.58,.04,0,.21,0,.26,.75,0,0,0,.11,0,.1,.26,.76,0,0,0,0,.53,.21,0,.13,0,0,0,.76,0,.43,0,.06,.27,.02,.47,.53,.47,0,.03,0,.08,.81,.88,.91,.9,0,0,0,.23,.64,0,.03,.24,0,0,0,.35,.29,.08,.01,0,.31,.02,.04,0,0,.03,.59,0,.4,.17,.01,.03,.11,.04,0,0,0,.84,0,0,.12,.7,.48,.21,.84,0,0,.35,.38,.07,.33,.56,.73,.23,.19,.28,.95,0,0,.51,0,.33,0,0,.52,0,0,.62,.02,.22,0,.63,0,.63,.5,.38,.67,.4,0,0,.86,.08,0,.01,.37,0,.96,0,.02,.07,0,.2,0,.68,.11,.92,.01,0,.06,.13,.54,0,0,.11,0,.04,.5,.07,0,.09,.01,.48,.25,.63,0,0,0,0,.13,0,0,0,.02,0,0,0,0,.18,0,.08,0,0,0,0,.02,0,.31,.02,0,0,0,.05,.13,0,.02,.6,.36,.5,.03,0,0,.3,.02,0,.22,0,.14,.1,.28,.05,.13,0,0,.14,.33,.89,.34,0,0,.01,.52,0,.37,.56,.05,0,.02,0,.44,.67,.02,0,.14,0,0,.3,.12,0,0,.07,.66,.74,.05,.15,.2,0,0,0,0,.01,.21,.89,0,.6,.51,.19,0,.22,.5,.02,.22,.03,.63,.94,.3,.11,0,.01,.12,0,.01,.28,.01,.31,0,.57,0,0,0,.01,.01,.93,.07,.48,0,0,.15,.08,.77,.66,.46,.17,.07,.74,.22,.6,.01,0,0,.31,0,.26,.86,.73,.27,.97,.32,.22,0,0,0,0,.18,0,.01,.03,.13,0,.05,0,0,0,0,.21,0,0,1,0,.65,0,.06,.65,.84,.04,.46,.45,.74,.82,.29,0,.75,.01,0,.56,0,.02,.03,.98,.69,.89,0,.76,.33,.01,0,.83,.03,.2,.13,0,0,.1,.11,.43,0,.13,0,.26,0,.54,.31,.19,.34,.64,.8,0,0,.31,.2,.51,.88,.04,.48,.83,.22,.3,.9,.66,.22,.85,.67,.9,.87,.14,.59,.66,.36,0,.71,.01,.82,.75,.03,.38,.09,.1,0,.16,0,.05,.12,.46,0,.84,.08,.45,.71,.33,.56,.98,.47,0,0,.73,.58,.64,0,0,.16,.8,.94,.03,.42,.29,.01,0,.01,.01,.38,.17,.76,.26,.36,.36,.11,.04,0,.72,.37,0,0,.01,0,0,0,.93,.06,0,0,0,0,.67,0,.07,0,0,.1,0,.02,.68,0,.02,0,.01,0,0,.35,.05,0,0,0,0,.25,.66,0,.02,.02,.01,.42,0,.02,.03,.09,.08,.05,0,.06,0,0,.81,0,0,.25,0,.02,0,.32,0,.5,0,0,.24,.45,.04,.02,.99,.22,0,0,.07,.79,0,0,.65,.07,.35,0,0,.74,0,0,.12,.01,.98,0,.32,.25,.01,0,0,.1,.04,.14,.14,.16,.34,0,.02,.29,0,.1,.61,0,0,0,0,.41,.84,0,.74,0,.03,0,.47,0,1,.75,0,.02,.3,.38,.06,0,0,.54,0,.72,.01,0,0,0,.69,.32,0,0,.67,0,0,.68,0,.86,0,.15,0,0,.88,0,.02,.77,.51,.39,.06,.62,0,0,.13,.17,0,.03,.1,.06,.01,.28,0,.03,.04,0,.89,0,.96,0,0,0,.55,.58,.14,0,0,0,.54,.09,.32,.66,.97,.03,.56,0,.16,.58,.02,.83,.37,0,0,.44,0,0,.01,.08,.01,.02,.01,0,0,.02,.51,0,.88,0,.06,.02,.32,.38,.09,.14,.99,0,.58,.03,.21,.57,.41,0,.44,.74,.22,.57,0,0,0,.2,.07,0,0,0,0,.04,.01,.06,.68,.98,.15,0,.37,0,.05,0,.01,0,.28,.01,.57,.01,.07,0,.01,.01,.04,.01,.12,.55,.41,0,0,0,0,.49,0,.02,.06,.81,.46,.02,.58,.89,0,.22,.19,.66,.67,.33,.99,.52,0,.72,.58,0,.56,.01,.02,.47,.59,.06,.01,.17,.99,.24,0,.09,0,.02,0,0,.1,.19,.56,0,0,.39,0,.32,0,0,0,.3,0,.44,0,0,.35,.12,.37,.48,.55,0,0,.77,.43,.12,0,0,.12,.66,.03,0,.69,.5,.84,.18,0,.13,.18,.25,0,.02,.33,0,0,.25,.01,.55,0,.37,.26,.82,.54,.21,.84,.56,.02,.96,.65,.05,.35,0,.01,.44,.72,0,0,0,0,.73,.56,0,.15,0,.1,.02,0,.15,.11,.98,.14,.26,.4,.19,.01,.91,0,0,0,.23,.06,0,.74,.08,.02,.99,0,.08,0,0,.48,.7,.99,0,.07,0,0,0,.27,0,.38,0,.78,.07,.04,.16,.05,.05,.47,.03,0,.64,0,0,0,.11,.1,.53,0,.32,.13,.29,.01,0,.85,0,0,.06,.08,0,.35,.16,.28,0,.11,.75,0,.93,.35,0,.68,0,.27,0,0,.04,.01,.17,.58,0,.26,.31,0,.57,.02,.13,.64,0,.68,.01,.19,0,0,0,0,0,0,0,.33,.9,0,0,.33,0,.33,0,0,.03,0,0,0,0,0,.04,.65,0,0,.07,.12,.06,0,.1,.47,0,0,.02,0,.09,.01,.05,0,0,.05,.7,.28,0,.01,0,0,.09,0,0,0,0,0,0,.12,0,.68,.06,0,.06,.02,0,0,.12,.01,0,0,.64,.01,0,.04,0,0,.99,.1,0,.88,0,0,.07,0,.18,0,.37,0,.11,.18,.4,.43,.32,.07,0,.62,.03,.03,0,.46,.01,0,0,0,0,0,.77,.01,.36,.01,.85,.12,.93,0,0,0,.52,0,.97,.05,0,.1,0,.59,.42,0,0,0,.01,.43,0,.03,0,0,.03,0,.16,.02,0,.28,0,.12,0,0,.31,0,.56,.15,.71,0,.3,0,.08,.25,.84,0,.57,.21,.92,0,0,.11,.28,0,.08,.03,0,0,0,.34,.36,.85,0,.27,.39,1,0,0,.02,0,0,.08,.08,0,0,.02,.02,.01,0,0,.09,.32,0,.92,.82,.43,.75,0,0,.24,.03,0,0,0,.27,.47,.58,.43,0,.03,0,.02,.06,0,.95,0,.82,0,0,.24,.96,.5,0,.55,.8,0,.3,.13,.34,.37,.37,.54,0,0,.87,0,0,.26,0,0,0,0,.98,0,0,0,0,.82,.23,0,.05,0,0,0,0,.02,.02,0,0,.02,.03,0,0,0,.05,0,.19,.71,0,.01,0,.53,.01,.01,0,0,0,0,0,.94,0,.1,.38,0,.74,.11,.44,.05,0,0,0,.04,0,.18,0,.55,.68,.47,.01,.06,.26,.24,.34,.24,0,.01,.9,0,0,.61,.5,.14,.03,.02,0,.53,.17,.58,.01,.91,0,0,.04,0,.33,0,.05,.21,0,0,.9,0,0,.67,0,.36,0,.39,0,.01,.82,.42,.37,0,.17,0,.05,.88,0,0,0,.2,.85,.08,0,.01,0,.07,.69,.06,0,.01,.94,.07,0,.05,0,.69,0,0,0,.82,.02,0,.05,.42,0,0,.66,.06,.84,0,.01,.78,0,.13,.91,0,.29,.32,.91,0,.07,.12,.07,.68,.57,.57,.21,.61,.29,.13,0,.59,0,0,0,0,0,0,0,0,.01,.79,.15,0,0,.89,.05,.3,.75,0,0,0,.01,0,0,.93,.01,.03,.11,.04,.34,.01,.39,.07,.09,0,0,0,0,0,.16,.01,.38,.08,.03,0,.08,0,0,.4,.22,0,.36,.01,.8,0,.01,0,.03,.06,0,0,0,0,0,.34,0,.77,0,0,.93,.01,0,0,.01,0,0,0,0,0,.41,0,.48,0,0,0,0,0,0,0,.15,.04,.06,0,.21,0,0,.89,0,.02,0,0,.01,.98,0,.2,0,.65,.01,.01,0,.37,0,.95,0,0,.03,.05,.02,.01,0,.2,.96,0];export{a as pvalData};
