const a=[.03,.57,.01,.78,.05,.16,.18,.89,.96,.3,.04,.04,.05,.02,0,.47,.34,.22,.02,.75,.8,.78,.42,.06,.39,.34,.69,.11,.82,.91,.96,.49,.02,.22,.19,.11,0,.08,.38,.01,.26,.34,0,.98,.04,.14,.72,.08,.75,.3,.35,.02,0,.09,.01,.05,.25,.01,.22,.58,.18,.07,.08,.1,.77,.89,.09,.07,.29,.76,.45,.23,.71,.37,.14,.95,.97,.22,.15,.11,.74,.93,.99,.48,.91,.13,.4,.45,.37,.22,.21,.89,.81,.19,.13,0,.04,.13,.99,.18,0,.07,.39,0,.65,.13,.52,.21,.02,.23,.02,.98,.66,.9,.62,.23,.21,.88,.62,.41,.04,.05,0,.09,.33,.73,.15,.99,.96,.09,.74,.94,.84,.79,.01,.88,.9,.08,.69,.27,.17,.1,.76,.23,0,.18,.33,.88,.16,.12,.08,.38,.39,.25,.92,.55,.47,0,.14,.02,.7,.26,.7,.11,.71,.71,.16,.44,.72,.23,0,.28,.88,.43,.42,1,.17,.92,.74,.15,.42,.7,.95,.08,.32,.05,.01,0,.9,.55,.14,.35,.08,.09,.09,.01,.28,.02,.24,.98,.57,.16,.08,.01,.23,.02,.53,.87,.4,0,.44,.22,.13,.18,.02,.85,.67,.7,.93,.15,.56,.6,.89,.05,.76,.07,.93,.86,.3,1,.29,0,.75,.01,.2,0,.21,.51,.15,.05,.99,.07,.5,.58,.71,.99,.18,.45,0,.4,.93,.01,.02,.03,.09,.07,.85,.18,.1,.05,.35,.86,.09,.17,.96,.88,.4,.36,.43,.17,.08,.46,.03,.01,.46,0,.66,.18,.03,.54,.72,.34,.1,.03,.8,.27,.18,.02,1,.87,.94,.28,.05,.76,.69,.01,.05,.18,.09,.52,.7,.03,.8,.35,.01,.26,.43,.32,.46,.15,.41,0,.01,.03,.2,.54,.82,.59,.01,.89,.77,.26,.22,.29,.69,.81,.02,.12,.96,.98,.1,.59,.85,.15,.91,.3,.7,.18,.85,.95,.21,.03,.55,.51,.03,.01,.56,.74,.03,.38,.1,.96,.06,.96,.86,.12,.18,.23,.03,.04,.49,.18,.62,.07,0,.03,.06,.03,.17,.37,.82,.68,.55,.8,.16,.29,.25,.32,.62,.53,.13,.46,.07,.19,.57,.2,.47,.41,.05,.04,0,0,.2,.85,.8,.04,.54,.78,.35,.54,.3,.39,0,.98,.37,.63,.28,.08,.57,.64,.02,.01,.07,.01,.14,.17,.26,.03,.58,0,0,.55,.6,.02,.47,.06,.01,.25,.74,.39,.13,.49,.38,.14,.51,.05,.78,.06,.04,0,.2,.61,.64,.13,.13,.28,.02,.13,.69,.76,.3,.69,.31,.15,.96,.89,.34,.01,.25,.82,.09,.01,.63,.49,.54,.96,.08,.88,.54,.03,.47,.02,0,.02,.86,.01,0,.31,.01,.23,.06,.12,.14,.65,.5,.43,.26,.05,.63,.01,.35,.02,.1,.63,0,.26,.58,.55,.4,.51,.62,.59,0,.27,.42,0,.4,.01,.04,.22,.08,.4,.31,.11,.3,.11,0,.52,.59,.26,.48,.01,.81,.17,.83,0,.66,.05,.84,.01,.94,.63,.33,.62,0,.03,.87,.41,.1,.07,.54,.93,0,.97,.64,.77,.1,.96,.03,.16,.58,.05,0,0,.53,.17,.35,.64,.48,.67,.11,.82,.2,.4,.47,.83,.22,.93,.05,.7,.01,0,.53,.17,.56,.01,0,.53,.74,.51,.45,.01,.32,.82,.16,.21,.01,.66,.26,0,.59,.15,.37,.09,.23,.74,.09,.09,.02,.03,.1,.11,.03,.03,.16,.47,.5,.96,0,.12,.99,0,.24,.27,0,.07,.05,.92,.9,.01,.2,.44,.4,.15,.23,.01,.51,.56,.22,.47,.05,.74,.01,.85,.18,.26,.01,.91,.09,.49,.78,.28,.41,.02,.19,.14,.11,.37,.18,.29,.01,.82,.68,.01,.01,.62,.13,.71,0,1,.03,.02,.1,.19,.8,.07,.53,.4,.58,.66,.96,.65,.88,.69,.63,.75,.63,.21,.92,.95,.62,.13,.14,.02,.43,.02,.91,.59,.02,.69,.01,.51,.16,0,.26,.21,0,.17,.02,.77,.71,.87,.38,.76,.5,.27,.68,0,.01,.87,.14,.27,.01,.08,.06,.02,.37,.85,.01,0,.51,.01,0,.65,.72,.91,.27,.18,.02,.16,.64,.14,.05,.54,.67,.91,.02,.34,.12,.02,.14,.04,.89,.88,.91,.19,.46,.01,.82,.38,0,.55,.71,.42,.08,.52,.29,.54,.03,.65,.2,.74,.02,.28,.6,.02,.48,.02,.93,.01,.23,.7,.26,0,.88,.11,.6,.74,.1,.38,.09,.63,.45,.48,.01,.17,.79,.22,.25,.13,.43,.87,.07,.07,.12,.83,.02,.68,.02,.42,.13,.17,0,.09,0,.57,.11,.8,.39,.94,.1,.74,.03,.58,.51,.25,.01,.4,.73,.12,.02,.41,.2,.44,.71,.07,.28,.01,.92,.03,.03,.1,.64,.1,.35,.56,.94,.39,0,.84,0,.33,0,.2,.7,.06,.46,.75,.59,.65,.86,.59,.55,.69,.28,.84,.19,.88,.44,.24,.05,.02,.17,.14,.25,.38,.69,0,.24,.44,.54,.46,.1,.84,.36,.14,.55,.92,.03,.05,.93,0,.01,.33,.37,.34,.72,.41,.04,.73,.38,0,.19,.5,.36,.59,.73,0,.03,.13,.05,.68,.27,.02,.01,.02,.01,.84,.05,.95,.21,.83,.66,0,.06,.44,.14,.93,.37,.94,.54,.01,.2,.47,.07,.04,.01,.02,.44,.41,.35,0,.11,.18,.81,.01,.38,.9,.05,.23,.02,.62,.6,.56,.05,.19,.97,0,.08,.83,.95,.02,.19,.7,.73,.86,.29,.41,.2,.38,.03,.57,.74,0,.5,.85,.8,.49,.09,.31,.02,.97,.01,.09,.68,.74,.19,1,.95,.01,.08,.73,.34,.89,.1,.24,.42,.01,0,.09,.51,.62,.85,.42,.31,.68,.33,.1,.26,.73,.46,.14,.27,.56,.25,.42,.01,.41,.34,0,.72,.01,.97,.12,.88,.18,.19,.38,.13,.26,.61,.97,.19,.04,.21,.79,.01,.75,0,.2,.35,.02,.74,.89,.78,.07,.17,.4,.67,.39,.89,.03,.02,.07,.19,.82,.38,.72,.49,.02,.08,0,.27,.16,.02,.5,.67,.43,.63,.06,.32,0,.95,.65,.71,.32,.48,.15,.08,.27,.66,.03,.06,.11,.4,.07,.01,.79,.06,.09,.08,.6,.72,.59,.07,.02,.87,0,.46,.62,.8,.02,.04,.2,.01,.45,.22,.19,.05,.11,.63,.42,.81,.96,.36,.19,.11,.68,.01,.73,0,.4,.75,.13,.22,.17,.91,.65,.42,.3,.53,.13,.2,.02,.5,.33,.01,.3,.56,.62,.17,.02,.04,0,.54,.08,.08,.11,.02,.47,.23,.16,.85,.79,.15,.01,.19,.13,0,.41,.91,.85,.04,.06,.06,.93,.02,.72,.04,.02,.4,.81,.11,.57,.04,.95,.07,.02,.14,.15,.58,.01,.02,.91,.14,.67,.04,.31,.92,.88,.4,.03,.93,.91,.59,.04,.06,.05,.29,.01,.19,.49,.28,.14,.05,.04,.85,.06,.1,.18,.38,0,0,.03,.51,.19,.3,.01,.13,.99,.01,.02,0,.3,.06,.36,.5,.55,.33,.41,.86,.37,.06,.01,.03,.04,.45,.28,.88,.3,.73,.78,.04,.97,.03,.05,.88,.77,.07,.01,.03,.33,.01,.08,.01,.18,.02,.92,.05,.02,.25,.36,.31,.04,.07,.54,.93,.01,.9,.02,.49,.04,.73,.24,.2,.16,.5,.83,.43,0,.07,.17,.09,.25,.09,.62,.19,.09,.66,0,.33,.06,.01,.99,.73,.02,.03,.17,.2,.06,.44,.14,.32,.02,.86,.24,.25,.04,.98,.32,.05,.23,.37,.57,.95,.03,.23,.21,.05,.25,.81,.02,.01,.52,.34,.27,.34,.1,.1,.43,.87,.07,0,.6,.9,0,.05,.35,.01,.43,.86,.01,.44,.92,.06,.55,.49,.27,.58,.01,.53,0,.35,.84,.08,.02,.56,.09,0,.15,.43,.58,.03,.28,0,.18,.17,.65,.39,.7,.01,.11,0,.54,.78,.25,.02,.83,.7,.93,.85,.06,.47,.01,.23,.15,1,.57,.3,.44,.74,.99,.95,.58,.35,.03,.13,.82,.11,.08,.01,.04,.44,.4,.03,.21,.63,.01,.03,0,.39,.15,.01,0,.14,.03,.35,.74,.18,.29,.06,.01,.06,.81,.91,.03,.65,.69,.01,.99,.07,.05,.72,.31,.62,.38,.09,.36,.06,.23,.23,.1,.32,.53,.42,.16,.24,.01,.14,.17,.38,.03,.46,.28,.18,.81,.38,.28,.8,.02,.29,.82,.78,.43,.15,.42,.05,.94,.31,.07,.58,.47,.11,.55,.04,.08,.57,.83,.17,.01,.67,.27,.7,.71,.1,.05,.09,.04,.29,.09,.98,.19,.07,.7,.67,.11,.24,.12,.7,.17,.79,.01,.7,.38,.58,.94,.58,.7,.13,.1,.1,.4,.12,.89,.13,.19,.02,.76,.09,.01,.19,.1,.15,.95,0,0,.56,.7,.25,.18,.88,.3,.61,0,.71,.39,.19,.21,.11,.81,.28,.1,.53,.44,.07,.09,.29,.02,.62,.05,.06,.81,.02,.3,.05,.73,.07,.96,.94,.51,.65,.38,.5,.05,.04,.42,.74,0,.46,.76,.65,.68,.19,.58,.61,.78,.47,.42,.1,.4,.03,.01,.78,.47,0,.01,.4,.65,.34,.1,.53,.13,.02,.44,.28,.31,.29,.81,.01,.05,.13,.66,.19,.54,.32,.3,.01,.72,.01,.06,.06,.15,.82,.88,.09,0,.14,.22,.01,.8,.45,.02,.05,.16,.91,.01,.25,.92,.47,.38,.01,.15,.48,.01,.25,.42,.56,.84,.09,.18,.02,.35,.02,.18,.88,.26,.78,.06,.05,.92,.04,.43,.2,.12,.9,.61,.08,.01,0,.49,.29,.95,.51,.04,.3,.33,.01,.46,.55,.5,.68,.08,.05,.03,.04,.5,.01,.43,.2,.93,.5,.29,.56,.36,.6,.68,.03,.69,0,.07,.07,.4,.18,.47,.06,.64,.69,.07,.52,.17,.34,.77,.09,.19,.17,.03,.03,.08,.75,.29,.02,.04,.26,.32,.09,1,.71,.63,.4,.09,0,.65,.56,.59,.63,.02,.01,.13,.63,.1,.05,.54,.7,.31,.43,0,.14,.16,.06,.38,.16,.18,.22,0,.46,.01,.71,.72,.9,.15,0,.52,0,.24,.01,.63,0,.95,.01,.04,.02,.37,.03,.16,.96,.11,.42,.97,.87,0,.9,.01,.5,.22,.84,.17,.77,.32,.08,.06,.02,.46,.01,.73,.01,.64,.89,.45,.88,.08,.03,.12,.41,.3,.06,.22,.14,.8,.39,.17,.13,.04,.17,.42,.45,.24,.71,.16,.76,0,.56,.61,.52,.84,.18,.09,.06,0,.13,.01,.28,0,.01,.07,.07,.49,.04,.7,.57,0,.49,0,.75,.03,.01,.06,.14,.52,.09,.02,.01,.94,.08,.48,0,.02,.01,0,.83,.21,.11,.05,.02,.76,.35,.94,.05,.67,.12,.86,.07,.25,.5,.05,.74,.96,.41,.71,.19,.01,.19,.03,0,.9,.2,.01,.02,.12,.13,.6,.27,.86,.04,.47,.38,.5,.09,.07,.76,.17,.11,.04,0,.44,.07,.17,.04,.1,.8,.16,.5,.39,.58,0,.34,.51,.44,.02,.09,.01,.38,.96,.02,.04,.04,.27,.86,.06,.87,.4,.17,.72,.18,.16,.94,0,.1,.02,.13,.28,.24,.87,.46,.12,.87,0,0,.09,.04,.3,.49,.13,.83,.35,.39,.71,.04,.01,.29,.51,.01,.03,.04,.32,0,.01,.16,.74,.06,0,.16,.35,.75,.88,.34,.03,.52,0,.07,.05,.57,.22,.16,0,.01,.47,.55,0,.83,.31,.06,.53,.17,.33,.03,.84,.01,.39,.26,.98,.07,.1,.15,.12,.46,.15,.2,.08,.45,.94,.34,.01,.01,.01,.43,.1,.09,.82,.04,.4,.52,.05,.04,.01,.37,.01,.09,.77,.61,.75,.01,.15,.12,.02,.29,0,.24,.04,.05,.56,.78,.06,.4,.25,.44,.22,.21,.06,.03,.48,.04,.4,0,.01,.99,.86,.2,.4,.18,.07,.7,.08,.72,.5,.01,.49,.05,.01,.4,.3,.92,.55,.25,.07,.04,.45,.53,.75,.09,0,.24,.33];export{a as pvalData};
