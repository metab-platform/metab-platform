const a=[0,0,0,.56,0,.73,.09,.06,.4,.03,0,.55,.62,0,0,.4,.06,.52,.01,.46,.65,.01,.16,0,0,0,.19,.37,0,.32,0,.08,0,.1,.07,.1,0,0,.12,0,.61,0,0,.18,.6,.01,.89,.05,.29,.18,.34,.79,0,0,0,0,.01,.34,.42,0,0,0,0,.31,.35,.12,0,0,.25,.61,.95,0,.02,.17,0,.13,.24,0,0,.94,0,0,.34,0,.15,.15,0,.52,0,0,.53,.73,.52,0,.54,.09,0,.41,.03,0,.14,0,0,.06,0,.63,.63,.81,0,0,.92,.09,.83,0,.18,0,.05,0,0,0,.19,.12,.01,0,.45,0,0,0,.19,0,.04,0,.23,.35,0,0,.58,.16,.08,.65,0,.24,0,0,.53,.44,.91,.11,0,.04,0,.6,.8,.67,.02,.5,.08,.95,.28,0,.45,0,.59,.16,.47,.02,0,.05,.58,0,.93,.15,.19,0,0,.36,.54,.49,.1,0,.5,.31,.18,0,0,.27,.03,.1,.6,.02,.21,.81,.24,0,0,0,0,0,.73,.07,.03,0,0,.73,0,0,.68,.16,.02,.18,.04,0,.88,0,.3,.01,.6,.26,.34,.03,0,0,0,0,0,0,.19,.09,.01,.45,.94,.13,0,0,.14,.42,0,.19,.56,.3,.16,0,0,.01,.91,.01,.11,.13,.06,.65,.61,.01,0,.66,0,.88,.12,0,.84,0,.12,.25,0,0,.13,0,.45,0,.32,0,.88,0,0,0,0,.9,.82,.06,0,.22,.54,.09,0,0,.25,0,.89,0,.24,.16,.07,.1,0,.01,.52,0,.02,.09,.84,0,.48,0,.15,.29,.03,.03,.36,0,.29,0,0,.29,.09,.74,.08,0,.17,.68,0,0,0,.54,0,0,.41,.56,0,.04,.6,.32,0,0,.01,.31,.01,.61,.31,0,.02,.13,0,0,.13,.07,0,0,.38,.28,0,.59,0,0,.13,.4,0,0,.01,.47,0,0,.01,.18,.8,.44,.47,0,.7,0,.04,.55,.43,.05,.43,.07,0,.27,.93,0,.96,.57,.82,.34,.27,.21,.52,0,.97,.71,0,0,0,.34,.02,.29,.54,0,0,.57,.11,.32,.21,.2,0,0,.5,.34,0,0,0,0,0,0,0,0,.86,.82,0,0,.5,0,.45,0,.04,.81,.78,0,0,.18,.36,0,0,.02,0,.08,.87,0,.03,0,0,0,0,0,0,.35,.02,.01,0,0,.1,0,.05,0,0,.29,.22,.44,.08,0,.44,0,0,0,0,.03,.34,.86,0,.17,0,0,.59,0,0,.56,.93,0,0,.76,0,.03,0,0,0,.29,.03,.61,0,0,0,0,.38,.57,.01,.01,0,0,.62,.25,0,0,.84,.53,0,0,0,.01,.35,0,0,0,0,.07,0,.78,.02,.25,.25,.54,.1,0,.85,0,.89,.42,0,.73,.09,0,.23,0,.62,.57,.16,.07,1,.17,.09,0,0,.09,.43,.66,.15,.87,.09,.03,.33,.57,0,.38,.62,0,0,0,0,.21,0,0,0,.23,0,.13,.44,.03,.16,.35,.61,.86,.17,.3,0,0,.1,0,0,0,.01,0,.11,.08,.09,.1,0,.95,0,0,0,0,0,0,.11,.58,.86,0,.03,0,0,0,.02,.24,0,0,0,.19,0,.09,.75,0,.16,.23,.19,0,.69,.79,.21,.61,0,.01,.72,.81,.77,.02,.03,.41,.39,.47,.89,.64,0,0,.48,0,0,.08,0,0,0,.08,.07,.11,.94,0,0,.36,0,0,0,0,.33,0,.61,0,.32,0,0,.07,0,.6,.01,.26,0,0,0,.71,.25,.48,.56,.49,0,0,0,.53,.58,.22,0,0,0,0,0,.18,.43,0,0,0,.23,.1,0,0,0,0,.78,.02,.01,.05,.52,0,0,.45,0,0,0,.23,.02,0,.56,.7,.18,0,.92,.3,0,.01,.04,.26,.79,.03,.09,.46,.08,.21,.21,0,0,.99,0,0,0,.05,.06,0,0,.06,0,.19,.02,.41,0,.16,.21,.99,0,0,.01,.76,.32,0,.03,0,.17,0,.53,.26,.29,.38,0,.02,.25,.03,0,.9,0,.01,0,0,.04,0,0,.14,.15,.92,0,.47,0,.61,.92,0,.04,.05,0,.36,0,.59,.58,0,0,0,0,.03,.36,.44,0,.09,0,0,0,.13,0,0,0,0,.05,.02,0,0,0,0,.15,0,.69,.8,.54,.22,0,0,0,.04,0,.05,.41,0,.42,.92,.01,0,.95,0,.21,.07,.43,.94,.09,0,.88,.2,.65,.87,.77,.14,.02,.03,0,0,.22,.01,.54,0,.49,.02,0,.57,.01,.18,0,.04,.98,.28,.8,.75,.6,.31,0,0,.18,0,0,.03,0,.5,.02,0,0,.4,.13,.94,.08,.78,.14,.45,.2,.33,.34,0,.8,0,0,.52,.57,.24,0,.01,0,0,0,0,0,.86,0,.12,0,0,0,.09,.36,.29,.85,0,.33,.94,.55,.54,.77,.75,.61,.02,0,.43,.95,.11,0,.6,.05,.21,0,0,0,0,.47,0,0,.98,.86,0,0,0,0,0,.02,.2,0,0,.98,.84,.64,0,.2,.39,.04,0,.1,.7,0,.68,.21,.17,.29,.4,0,.79,0,.08,0,.27,0,.43,0,.93,.61,.31,0,.08,.45,0,0,0,0,.98,.18,.47,.25,0,0,.04,0,.37,.22,.01,0,.73,.49,.03,.01,0,.99,.01,.36,.67,.96,.7,.77,.13,.42,.71,.16,.42,.17,.2,.29,.01,.35,.61,.16,0,.41,.62,.16,.17,.05,0,0,.48,0,.74,0,0,.29,.99,0,.44,.06,.7,.08,.45,.01,.28,.68,0,0,.04,0,.4,.15,0,.11,.15,.76,.93,.7,.01,.31,0,.48,0,0,.29,.42,.15,.11,.33,.39,0,.45,.62,.17,0,.23,.24,.11,.02,0,.44,.25,.14,.02,0,.21,0,0,.01,0,0,.47,.1,.56,.17,.01,.78,.47,0,.01,0,.33,0,0,.06,0,0,.02,.45,0,0,0,.01,0,.18,0,.02,0,.9,0,.62,.11,.04,.01,.9,.12,.17,.02,0,.4,0,.08,0,.14,.05,.01,.63,.74,0,.73,.52,.01,0,0,0,.54,0,0,.04,.64,0,0,.65,.39,.02,0,.74,0,0,0,0,.04,0,.04,0,.55,.91,.73,.34,.28,.8,0,0,.18,.33,0,.01,0,0,0,0,.69,.05,0,.33,0,.24,0,.53,0,.39,.01,.11,.89,.08,.01,.23,0,0,.21,0,.77,.03,0,.85,0,.68,.01,0,0,0,.09,0,.42,0,.29,0,0,0,0,.22,0,.22,.07,0,0,.93,.05,0,0,.96,.15,0,0,.85,.43,.47,.69,.06,.89,.52,.08,0,0,.62,0,0,0,.3,.3,.63,0,0,0,.08,.6,.71,.9,.01,0,.99,0,.33,.12,.79,.21,.12,0,0,0,0,0,0,.12,0,.99,.02,.05,.04,.19,.95,0,.08,0,.01,0,0,0,.01,0,.15,0,.35,0,.48,.81,.82,0,.69,.51,.88,.22,0,0,0,.01,.55,.19,0,0,0,0,0,.34,.54,.43,0,.02,.03,0,.88,0,0,0,0,.07,.4,.04,0,0,.24,.06,.04,0,0,.43,.06,0,0,0,.02,.21,0,.01,.11,.2,.78,0,.3,.33,0,.36,.01,0,.01,0,.96,.41,0,.64,.05,0,.22,0,0,.92,.04,.87,.11,.66,.98,0,0,.39,.04,0,.44,0,.47,.26,.83,0,.29,.03,0,.38,.17,0,0,.1,0,.17,0,.02,.86,.7,0,.06,.25,0,0,.76,0,.94,0,0,.01,.01,.35,0,0,.48,.31,.02,0,0,0,.99,.06,0,.15,0,0,.05,.76,.98,0,.55,.26,.06,.79,0,.73,.18,.2,.15,.95,0,.09,.3,0,.4,.59,0,.4,0,0,.79,.18,.08,.76,.04,0,0,0,.4,.06,.4,.01,.71,0,0,0,.06,0,0,0,0,.58,.84,.46,.89,.73,.02,.66,0,0,.01,.2,0,0,.37,0,0,.12,0,.23,0,0,0,.58,.68,0,.35,0,.05,0,0,.91,.73,0,0,0,.01,.72,.63,.04,.59,.67,.23,0,.84,.44,0,.2,0,0,0,.05,.24,0,0,.04,.16,0,.05,.27,0,.05,0,0,.66,.33,.04,0,.2,.16,0,.85,.11,.15,0,0,.2,.11,0,.42,.97,0,0,0,0,.62,0,0,0,.15,.02,.45,0,0,0,.08,0,0,.29,.77,0,0,0,0,.26,.5,0,0,.01,.94,0,.01,0,.96,0,0,.02,0,.51,0,.88,.02,0,0,0,.58,0,0,0,.37,0,.03,0,0,0,.1,.05,.47,.99,.03,0,.54,.06,0,.13,.06,.01,.02,0,0,.28,.01,0,.42,.01,0,.2,.14,0,0,.04,0,.01,0,.42,0,.03,0,.4,.98,.81,.03,.65,.3,0,.15,0,.06,0,.55,.86,0,0,0,0,0,.01,.85,.01,.03,0,.56,.01,0,0,0,.51,0,.01,.51,0,.8,0,.08,.05,0,0,0,0,.72,0,0,0,.01,0,0,.03,0,0,.3,0,.68,0,0,.25,0,.09,.66,0,.02,.65,0,.12,.02,.59,.18,.08,.84,.38,0,0,0,.27,0,0,0,0,0,0,.64,.04,.04,0,.38,0,.06,.03,.01,.34,0,0,0,.02,0,0,.18,.02,.51,0,0,.11,0,.53,.49,.33,.55,.09,0,0,0,0,.02,.02,0,.91,.99,.01,.43,0,.83,0,0,0,0,.23,0,0,0,.13,.13,.34,.01,0,.07,.04,0,.88,0,.59,.8,.01,.77,0,0,.3,0,0,0,0,0,.05,0,.4,0,0,0,0,.39,0,0,0,0,.01,.17,0,0,0,0,0,.07,.48,0,0,0,.48,.21,.52,.76,0,.02,0,.66,0,0,0,0,0,0,0,.86,0,.87,.01,0,.69,.04,.75,0,0,0,.01,.9,0,.01,0,.07,.37,.73,.28,.58,.84,0,0,.23,.28,0,.2,0,.02,.29,.48,.39,.01,.02,0,.63,.95,0,.85,.07,0,0,0,.11,.96,0,.33,.22,0,0,0,.68,0,.01,0,.84,0,.56,0,.02,.84,0,.76,0,.56,0,0,.29,0,0,0,0,.13,.69,0,.01,.1,.21,.2,.75,0,0,.79,0,0,.02,.14,0,0,0,.06,.01,.02,0,0,.84,0,0,.26,.2,.63,0,.04,.23,0,.37,.6,0,.65,.78,.15,0,.01,0,.47,.78,0,.36,0,.01,.75,.3,.65,.34,0,0,0,.32,0,0,0,0,0,.65,.14,0,0,.73,.04,.33,.19,.05,0,0,0,0,.64,0,0,.06,.56,.16,.9,0,.1,.29,.76,0,0,0,0,0,.75,0,0,.08,.08,.01,0,0,0,.88,.5,0,.01,0,.01,0,.07,0,.14,.76,0,0,0,0,0,.02,0,.01,0,0,.24,.02,0,0,0,0,0,0,.31,0,0,.06,.71,0,0,0,0,0,0,0,0,.19,0,0,.63,0,0,.79,0,0,0,0,.68,.56,.93,.05,0,.85,0,0,0,.01,.01,.4,.94,.1,.65,.01,.48,.31,0,.77,.63,0];export{a as pvalData};
