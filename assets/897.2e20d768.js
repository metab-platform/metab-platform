const a=[0,.08,0,.85,0,.25,.34,.99,.01,.01,.01,.39,.05,0,0,.52,.69,.26,.47,.35,.7,.27,.58,.13,0,0,.06,.92,.26,.04,0,.01,0,.15,.83,.8,0,.01,.03,0,.73,0,.01,.68,0,.02,.86,.04,.8,.02,.17,.03,.72,0,0,.2,0,.16,.01,0,.19,0,0,.31,.16,.21,0,.02,.72,.72,.27,.02,.01,.61,0,.66,.54,.17,.03,.12,0,0,.5,0,.52,.69,0,.49,0,0,.61,.46,.09,0,.8,.11,0,.02,.11,.03,.56,0,0,.58,0,.05,.37,.73,0,0,.15,.01,.53,0,.88,0,.7,.09,.09,0,.5,.99,.51,.21,.57,0,0,.81,.07,0,.86,.07,.39,.39,.34,.45,.51,.01,.01,.02,0,.08,0,0,.02,.74,.96,.25,0,.49,0,.95,.11,.09,.93,.48,.94,.04,.05,.01,.3,0,.4,.04,.04,.04,.09,.01,.71,0,.07,.12,.86,.35,0,.13,.81,.98,.07,0,.83,.95,.54,0,0,.11,.39,.15,.35,.04,.49,.45,.57,0,0,0,0,.47,.02,.08,.57,0,0,.86,.01,0,.47,.01,.12,.29,.73,0,.04,0,.15,.29,.25,.46,.06,.05,.01,0,.02,0,0,0,.95,.02,.15,0,.38,.24,.02,0,.01,.04,.04,.98,.97,1,.12,0,.89,.79,.35,.16,.36,.44,.78,.53,.26,.25,0,.02,0,.47,.15,.01,.86,0,.63,.37,.02,0,.77,0,.08,0,.06,.01,.21,.06,0,0,0,.48,.8,.25,0,.92,.05,.07,.09,.02,.05,.01,.18,0,.32,.28,.35,.02,0,.21,.15,0,.22,0,.13,.34,.19,0,.13,.21,.58,.01,.86,.01,.43,.55,0,.74,.22,.02,.02,.37,.69,.59,0,.11,0,.09,.01,0,.67,.01,0,.47,.38,.02,.01,0,.27,.1,.11,.25,.43,.07,.42,.11,.02,0,.07,.5,0,0,.01,.08,.01,.11,0,.05,.72,.02,0,.02,.09,.37,0,0,.02,.77,.01,.85,.87,0,.67,0,.04,.4,.32,.19,.01,.31,.41,.27,.08,0,.7,.35,.58,.74,.69,.64,.91,.03,.49,.03,0,0,0,.08,.81,.19,.39,0,.01,.72,.91,.38,.59,.27,0,0,.05,.01,.01,0,0,0,0,.1,.61,0,.98,.34,0,0,.05,.74,.23,0,.36,.22,.02,0,0,.44,.01,.19,.86,.22,0,.23,.59,0,.08,0,0,0,0,0,0,.5,.17,.09,0,0,.64,0,.1,0,0,.84,.28,.65,.22,0,.49,0,0,0,0,.11,.19,.3,0,.92,0,0,.83,0,.36,.23,.09,0,.02,.95,0,.16,0,0,0,.02,.41,.52,0,.11,0,0,.07,.41,.61,.29,0,0,.35,.55,0,.78,.67,.86,0,0,0,.62,.8,0,0,.06,0,.14,0,.47,.43,.37,.91,.9,.15,0,.41,0,.24,.93,.12,.05,.56,.78,.75,0,.14,.22,.56,.37,.05,.27,.01,.01,.61,.91,.43,.05,.09,.42,.38,.31,.21,.6,0,.83,.18,0,0,.01,0,.98,.17,.29,.06,.45,0,.4,0,.84,.93,.05,.9,.52,.36,.98,0,0,.77,.05,0,0,.49,.07,.07,.18,.19,.8,0,.32,0,0,0,0,.17,0,.66,.07,.15,0,.98,0,0,0,.72,.66,0,0,0,.85,0,.14,.26,.16,.63,.9,.04,0,.6,.63,.65,.39,0,.12,.59,.13,.84,.92,.22,.27,.29,.03,.13,.33,0,.26,.6,.02,.01,.22,.12,.06,0,.87,.13,.02,.77,0,.01,.55,.09,0,.83,0,.44,0,.35,0,.19,0,0,.21,.05,.92,.73,.97,0,0,0,.46,.11,.09,.44,.04,0,0,.01,.36,.97,.04,.01,.42,0,0,.42,.15,.51,.45,0,0,.78,.68,0,0,0,.69,.82,0,.9,.13,.02,.47,.96,.04,0,0,0,.32,0,0,.63,.42,.1,.01,.23,.14,0,.91,.03,.71,.39,.92,.21,.74,.07,.65,.54,0,0,.74,0,0,.2,.03,0,0,0,.34,0,.35,.01,.27,0,.98,.87,.97,.02,0,.01,.51,.87,0,0,0,0,.01,0,.87,.43,.19,0,.34,.92,.48,.02,.28,.43,.01,0,.1,.15,.01,0,.59,.23,.45,.74,.45,0,.08,.07,.01,.2,.94,0,.21,0,.85,.17,0,0,0,0,.26,.09,.3,.35,.21,0,.13,0,.01,0,0,.01,.01,.93,.87,.33,0,.03,0,.18,.41,.12,.78,.68,.21,0,.44,0,.74,0,.46,.55,0,.02,.54,.87,0,.1,0,.08,.39,.22,.77,.02,0,.79,.79,.6,.18,.62,.13,.61,.03,.01,0,.1,.78,.2,0,.92,.28,.01,.88,.85,.07,0,.99,.83,.08,.42,.2,.21,.23,0,0,.71,.01,.34,.31,.03,.11,.05,.6,.83,.28,.81,.09,.89,.2,.9,.55,.09,.42,.38,.11,.62,0,0,.67,.53,.01,0,.4,0,.12,.01,.05,0,.51,0,.92,0,0,.03,.71,.54,.83,.01,0,.48,.21,.44,.44,.03,.37,.07,.69,0,.14,.27,.45,.8,.97,.89,.94,.1,.03,0,0,.04,0,0,.36,.53,0,0,0,0,0,.04,.22,.09,0,.08,.87,.82,0,.98,.95,.77,0,.29,.98,.97,.89,.08,.71,.68,.13,0,.09,0,.19,0,.54,.82,.37,0,.91,.17,.19,0,.02,.56,.17,.02,0,0,.09,.68,.01,.06,0,0,.81,.13,.75,.73,.53,.43,.18,.05,.22,0,.33,.04,.42,.31,.13,.83,.14,.03,.03,.62,.05,.5,.59,.98,.61,0,.42,.52,0,.05,0,.39,.85,.72,.1,.14,.03,.4,.58,0,.6,0,0,.45,0,0,.57,.04,.22,.57,.9,.33,.02,.59,.03,0,.49,.69,.87,.5,0,.38,.75,.22,.12,.75,.13,.48,.78,.83,.09,.16,.2,0,.08,.16,.83,.9,0,.15,.02,.28,0,.14,.03,.02,.1,0,.27,.03,.13,.64,0,.3,0,0,.86,.01,0,.04,.21,.97,.81,.17,.52,.67,.36,.43,0,.66,.62,0,.25,.02,0,.95,.02,0,0,.72,.24,.06,.05,0,.04,0,.82,0,.59,.12,.01,.01,.81,.12,.81,.17,0,.17,0,.1,.01,.03,.34,.15,.08,.34,.03,.64,.47,.48,0,0,.21,.17,0,0,.53,.05,.92,0,.42,.63,0,0,.03,0,.13,0,.11,.08,.54,.92,0,.02,.14,.02,.47,.8,.01,0,0,.01,.09,0,.11,0,0,0,.03,.3,.21,0,0,0,.48,0,.83,0,.96,.96,.58,.23,.46,.01,.03,0,0,.64,0,.73,.99,.02,.97,0,.13,.17,0,0,.01,.26,0,.24,0,.04,0,.32,0,0,.85,0,.37,.45,.13,0,.13,.33,0,0,.4,.46,0,.07,.03,.07,.76,.15,.15,.17,.78,.44,.64,0,.89,0,.02,0,.07,.17,.02,0,0,0,.06,.02,.72,.24,.85,0,.04,0,.58,.32,.91,.76,.52,0,.02,.6,0,0,0,.61,.45,.66,.22,.07,.02,.09,.03,0,.53,0,.58,.24,.27,.06,.02,.18,.69,0,.14,.04,.11,.04,.03,0,.22,.14,.17,.5,0,0,0,.85,.03,.84,0,0,0,0,0,.7,.02,.35,0,.3,.72,0,.39,.01,0,0,0,.2,.83,.06,0,0,.15,.02,.65,.92,.12,.21,.02,0,0,0,.06,.14,0,.72,.05,.81,.05,.18,.99,.79,0,.28,.87,.79,.01,.24,.03,.58,0,.13,.23,.12,.08,.02,0,0,.22,.29,.07,.31,.5,.01,0,.03,.58,.17,.91,0,0,.32,.01,0,.68,.11,0,0,.39,.22,.19,.08,.06,.13,.48,.74,.94,.58,.41,0,.58,0,0,.82,.01,.12,0,0,.54,.66,.81,0,.32,.43,.27,.63,0,0,.03,.29,.04,.03,.11,0,0,.29,.08,.21,0,.14,.79,.52,.64,.04,.24,.43,.19,.25,.32,0,.14,.34,0,.03,.71,0,.06,0,0,.36,0,.06,.42,.06,.03,.25,0,.04,.56,.77,.42,.22,.17,0,.31,.13,0,0,0,0,.68,.38,.14,.66,.01,.28,.05,.01,0,.15,.79,.41,.06,.04,.38,.04,.98,0,.33,0,.01,0,.9,.03,.03,.3,.01,.92,0,0,.36,.9,.01,.48,0,.01,.35,.35,0,.29,.17,.41,0,.43,.1,0,.02,.36,.01,0,0,.07,.02,.01,.27,.73,.1,.24,.1,0,.82,0,.02,.27,.28,0,.45,.71,.09,0,.01,.71,.27,.97,0,.05,.01,0,.34,.23,0,0,0,0,.16,0,0,0,.01,.16,.75,0,.36,0,.25,0,0,.05,.25,0,.3,0,0,.37,.01,0,0,0,.58,0,.22,.02,.76,0,0,0,0,.07,.01,.28,.16,0,.01,.21,.52,0,0,0,.11,.01,.03,0,0,0,.84,.51,.18,.09,.31,0,.29,.68,0,.36,0,0,.07,0,0,.04,.95,.01,.02,.06,0,.81,.68,0,.08,0,0,.05,0,.99,0,.16,.01,.93,.13,.99,.09,.97,0,0,.06,0,.25,.03,.48,.49,0,0,0,0,0,.53,.95,.83,.09,.14,.95,.29,0,.01,0,.86,0,.88,.13,.12,.58,0,.61,.09,0,0,0,0,.91,0,.02,0,0,0,0,.15,.04,0,.97,0,.26,0,0,.16,0,.69,.22,.21,.11,.53,.3,.18,.92,.92,.24,.03,.38,.32,0,0,.09,.29,0,.01,.02,0,0,0,.92,.42,.95,0,.54,.08,.97,.24,.06,.15,0,0,0,.7,0,.02,.24,.01,.71,0,.06,.25,0,.24,.16,.41,.81,.19,0,0,.04,.76,0,.09,0,.04,.02,.5,.09,0,.81,0,0,0,0,.24,0,.01,0,.14,.09,.05,0,0,.49,.41,0,.15,.03,.81,.69,.37,.53,0,0,.94,0,0,.45,0,.16,.06,0,.8,0,0,0,.06,.7,0,0,0,0,0,.26,0,0,0,0,.01,0,.7,0,0,0,.87,.1,.87,.61,0,.19,0,.04,0,0,0,0,0,0,0,.52,0,.7,.05,0,.3,.98,.76,0,0,0,0,.1,0,.13,0,.01,.48,.88,.92,.03,.02,0,.37,.73,.38,0,.79,0,.37,.33,.84,.61,.29,.56,0,.82,.3,.06,.04,.39,0,.28,.8,.03,.19,0,.19,.48,0,0,.12,.89,0,.46,0,.61,0,.41,0,.01,.79,.01,.05,.83,.04,.01,.52,.05,0,0,0,.03,.17,.75,0,0,0,.09,.65,.08,0,0,.51,.01,0,0,.14,.3,0,0,.02,.75,.04,.01,0,.53,.1,.01,0,.92,.93,0,.65,.5,0,.08,.8,0,.06,.14,.76,0,0,0,.66,.27,.11,.62,0,0,.02,.19,.25,.83,0,0,0,.28,.01,0,0,0,0,.07,.06,0,0,.1,.87,.3,.05,.54,0,0,.52,0,.29,.24,0,.78,.02,.3,.14,.02,0,.24,.74,0,0,.01,0,.03,.72,0,.55,.31,.39,.76,.42,0,0,.57,.45,0,.01,0,.03,0,.07,0,.29,.37,0,0,0,0,0,.74,0,.27,0,0,.34,0,0,0,.02,0,0,0,.2,0,.61,.01,.33,0,0,0,0,0,.55,0,0,.47,0,0,.08,0,.05,.09,0,.04,0,0,.09,.31,.64,.41,0,.34,0,.09,0,.9,.18,.35,.31,.6,.33,0,.51,.01,0,.11,.21,0];export{a as pvalData};
